// import { APIGatewayEvent, Context } from "@types/aws-lambda";
import fetch from "node-fetch";

// /**
//  * @param { APIGatewayEvent } event
//  * @param { Context } ctx
//  */
export async function handler(event, ctx) {
  const res = await fetch("https://pixabay.com/api/?key=" + process.env.API_KEY);
  const data = await res.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}
