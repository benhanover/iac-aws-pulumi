import { Eip, NatGateway } from "@pulumi/aws/ec2";
import { publicSubnet1a } from "./subnets";

const natEip = new Eip("nat-eip");

const ngw = new NatGateway("nat-gateway", {
    allocationId: natEip.id,
    subnetId: publicSubnet1a.id,
    tags: {
        Name: "mitiga-ngw"
    }
});

export { ngw };