import * as pulumi from "@pulumi/pulumi";
import { BucketPolicy } from "@pulumi/aws/s3";
import { mitigaBucket } from "./s3"

new BucketPolicy("mitiga-bucket-policy", {
    bucket: mitigaBucket.id,
    policy: pulumi.all([mitigaBucket.id]).apply(([bucketId]) => JSON.stringify({
        Version: "2012-10-17",
        Id: "CloudWatchPutObjectPolicy",
        Statement: [{
            Sid: "CloudWatchPutObject",
            Effect: "Allow",
            Principal: { "Service": "cloudwatch.amazonaws.com" },
            Action: ["s3:PutObject"],
            Resource: `arn:aws:s3:::${bucketId}/*`,
        }]
    })),
});