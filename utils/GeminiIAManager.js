
import { GoogleGenerativeAI } from "@google/generative-ai"
import { wireframe } from "./models.js";

const genAI = new GoogleGenerativeAI(""); // GEMINI API KEY
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });


class GeminiIAManager{

    refinarRequest(reqBody){
        const minEdad = reqBody.minEdad.valor + " " + reqBody.minEdad.unidad
        const maxEdad = reqBody.maxEdad.valor + " " + reqBody.maxEdad.unidad
        let casosRandom = " "
        for(let i=0; i<reqBody.casos.length; i++){
            casosRandom += reqBody.casos[i]
            casosRandom += i === reqBody.casos.length -1 ? "," : " ó "
        }
        return {minEdad, maxEdad, casosRandom}
    }

    async sendTextPrompt(req){
        const {minEdad, maxEdad, casos} = this.refinarRequest(req);

        const realPrompt = "Genera, por favor, un caso clinico restingindo en las edades" +
            minEdad + " y " + maxEdad + ". Eligiendo uno de los siguientes padecimientos " + 
            casos + " y siguendo estrictamente la siguiente estructura como retorno (sin ningún texto adicional): " + wireframe

        return await model.generateContent(realPrompt)
    }
    
}

const geminiManager = new GeminiIAManager()
export default geminiManager
