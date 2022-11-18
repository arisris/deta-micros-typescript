import { Deta } from "deta";
const NS = (name: string) => "simkuring:" + name;

export const deta = Deta();
export const Base = (name: string) => deta.Base(NS(name));
export const Drive = (name: string) => deta.Drive(NS(name));
