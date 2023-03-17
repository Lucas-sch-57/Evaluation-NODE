import { JeuxService } from "./jeux.service.js";

let service = new JeuxService;
let domElement = document.querySelector('#game-list')
service.getAll(domElement)