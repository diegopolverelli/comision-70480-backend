import { expect } from "chai"
import { describe, it } from "mocha"
import mongoose, { isValidObjectId } from "mongoose"

import supertest from "supertest"

try {
    await mongoose.connect('mongodb+srv://coderhouse:codercoder2023@cluster0.wpxpupc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=comisPruebas')
} catch (error) {
    console.log("error...")
}

const requester = supertest("http://localhost:8080")

describe("Pruebas router sessions", function () {
    this.timeout(10_000)

    after(async () => {
        await mongoose.connection.collection("users").deleteMany({ email: "test@test.com" })
    })

    let cookie

    let userMock = {
        first_name: "Diego",
        last_name: "Polverelli",
        email: "test@test.com",
        password: "123"
    }

    it("Si realizo un post a /api/sessions/register con datos invalidos de un user , retorna un status code 400", async () => {

        let userMockBad = {
            last_name: "Polverelli",
            email: "test@test.com",
            password: "123"
        }

        let {statusCode} =await requester.post("/api/sessions/register").send(userMockBad)
        
        expect(statusCode).to.be.eq(400)
    })

    it("Si realizo un post a /api/sessions/register con datos de un user válido, genera un usuario en DB", async () => {

        let {body} =await requester.post("/api/sessions/register").send(userMock)
        
    // "status": "success",
    // "payload": "6848b14805db9c5b6eec342d"

        expect(body).to.has.property("status").and.to.be.eq("success")
        expect(body.payload).to.be.ok
        expect(isValidObjectId(body.payload)).to.be.true
    })

    it("Si realizo un post a /api/sessions/login con datos de un user previamente registrado, genera un usuario en DB", async () => {

        let {body} =await requester.post("/api/sessions/login").send(userMock)
        
    // "status": "success",
    // "message": "Logged in"

        expect(body).to.has.property("status").and.to.be.eq("success")
        expect(body).to.has.property("message").and.to.be.eq("Logged in")
    })

    it("Si realizo un post a /api/sessions/login con datos de un user previamente registrado, retorna una cookie de nombre coderCookie", async () => {

        let {headers} =await requester.post("/api/sessions/login").send(userMock)

        // console.log(headers)
        
        cookie=headers["set-cookie"]
        let nombreCookie=cookie[0]
        nombreCookie=nombreCookie.split("=")[0]
        // console.log(nombreCookie)

        expect(nombreCookie).to.be.eq("coderCookie")
    })

    it("Si hago un get a /api/sessions/current, enviando una cookie obtenida en el login, retorna los datos del usuario logueado", async()=>{
        let {body}=await requester.get("/api/sessions/current").set("Cookie", cookie)

        // "status": "success",
        // "payload": {
        //     "name": "Diego Polverelli",
        //     "role": "user",
        //     "email": "diegopolverelli1055@hotmail.com",
        //     "iat": 1749595635,
        //     "exp": 1749599235
        // }

        expect(body).to.have.property("status").and.to.be.eq("success")
        expect(body.payload).to.have.property("email").and.to.be.eq(userMock.email)
    })


})