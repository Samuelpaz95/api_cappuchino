import { Request, Response } from "express";
import { Icontroller, Imodel } from "./interfaces";

class Controller implements Icontroller {
	private model: Imodel;

	constructor(model: Imodel) {
		this.model = model;
	}
}

export default Controller;
