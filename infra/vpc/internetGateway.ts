import { InternetGateway } from "@pulumi/aws/ec2";
import { mitigaVpc } from "./vpc";

const igw = new InternetGateway("igw", {
    vpcId: mitigaVpc.id, 
    tags: {
        Name: "mitiga-igw"
    }
});


export { igw };