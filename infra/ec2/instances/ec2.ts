import { Instance } from "@pulumi/aws/ec2";
import { privateSubnet1a } from "../../vpc/subnets";
import { ec2S3InstanceProfile } from "../../iam/InstanceProfiles/ec2-role-instanceProfile";
import { sshSecurityGroup } from "../security-groups/mitiga-ec2-sg";

const ec2Instance = new Instance("mitiga-ec2", {
    instanceType: "t2.micro",
    ami: "ami-05c13eab67c5d8861",
    subnetId: privateSubnet1a.id,
    iamInstanceProfile: ec2S3InstanceProfile.id,
    vpcSecurityGroupIds: [sshSecurityGroup.id],
    tags: {
        Name: "mitiga-ec2",
    },
});

export { ec2Instance };
