import { Subnet } from "@pulumi/aws/ec2";
import { mitigaVpc } from "./vpc";

const privateSubnet1a = new Subnet("private-subnet-1a", {
    vpcId: mitigaVpc.id,
    cidrBlock: "10.1.0.0/18",
    availabilityZone: "us-east-1a",
    tags: {
        Name: "mitiga-private-subnet-1a"
    }
});

const publicSubnet1a = new Subnet("public-subnet-1a", {
    vpcId: mitigaVpc.id,
    cidrBlock: "10.1.64.0/18",
    availabilityZone: "us-east-1a",
    tags: {
        Name: "mitiga-public-subnet-1a"
    }
});


export { privateSubnet1a, publicSubnet1a };