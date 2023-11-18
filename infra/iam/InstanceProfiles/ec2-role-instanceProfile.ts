import { ec2Role } from "../roles/ec2-role";
import { InstanceProfile } from "@pulumi/aws/iam";

const ec2S3InstanceProfile = new InstanceProfile("ec2InstanceProfile", {
    role: ec2Role.name,
});

export { ec2S3InstanceProfile }