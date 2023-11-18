import { Bucket } from "@pulumi/aws/s3";

const mitigaBucket = new Bucket("mitiga-bucket-13579", { bucket: "mitiga-bucket-13579" });

export { mitigaBucket };