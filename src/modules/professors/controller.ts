import { Request, Response } from "express";
import { Icontroller, Iservice } from "./interfaces";

class Controller implements Icontroller {
	private service: Iservice;

	constructor(service: Iservice) {
		this.service = service;
	}
}

export default Controller;
