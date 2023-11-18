import { assumeRolePolicyForPrincipal, Role } from "@pulumi/aws/iam";

const ec2Role = new Role("ec2S3BucketRole", {
    assumeRolePolicy: assumeRolePolicyForPrincipal({ "Service": "ec2.amazonaws.com" })
});

export { ec2Role };