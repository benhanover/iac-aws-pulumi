import { Vpc } from "@pulumi/aws/ec2/index";

const mitigaVpc = new Vpc("mitiga-vpc", {
    cidrBlock: "10.1.0.0/16",
    tags: {
        Name: "mitiga-vpc",
    },
});

export { mitigaVpc };
