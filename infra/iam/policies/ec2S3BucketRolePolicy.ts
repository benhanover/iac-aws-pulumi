import * as pulumi from "@pulumi/pulumi";
import { RolePolicy } from "@pulumi/aws/iam";
import { ec2Role } from "../roles/ec2-role";
import { mitigaBucket } from "../../s3/s3";

new RolePolicy("ec2S3BucketRolePolicy", {
    role: ec2Role.name,
    policy:  {
        Version: "2012-10-17",
        Statement: [{
            Effect: "Allow",
            Action: ["s3:PutObject"],
            Resource: pulumi.interpolate`${mitigaBucket.arn}/*`
        }]
    },
});
