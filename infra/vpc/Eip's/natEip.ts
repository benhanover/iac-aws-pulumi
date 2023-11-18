import { Eip } from "@pulumi/aws/ec2";

const natEip = new Eip("nat-eip");

export { natEip };