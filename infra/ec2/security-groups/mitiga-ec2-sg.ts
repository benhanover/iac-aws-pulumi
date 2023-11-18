import { SecurityGroup } from "@pulumi/aws/ec2";
import { mitigaVpc } from "../../vpc/vpc";

const sshSecurityGroup = new SecurityGroup("mitiga-sshSecurityGroup", {
    vpcId: mitigaVpc.id,
    ingress: [{
        protocol: "tcp",
        fromPort: 22,
        toPort: 22,
        cidrBlocks: ["0.0.0.0/0"]
    }]
});

export { sshSecurityGroup };