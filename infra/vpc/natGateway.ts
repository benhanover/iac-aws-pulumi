import { NatGateway } from "@pulumi/aws/ec2";
import { publicSubnet1a } from "./subnets";
import { natEip } from "./Eip's/natEip";

const ngw = new NatGateway("nat-gateway", {
    allocationId: natEip.id,
    subnetId: publicSubnet1a.id,
    tags: {
        Name: "mitiga-ngw"
    }
});

export { ngw };