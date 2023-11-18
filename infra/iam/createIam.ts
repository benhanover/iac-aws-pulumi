import "./roles/ec2-role";
import "./policies/ec2S3BucketRolePolicy"; //depend on ec2-role, s3, 
import "./InstanceProfiles/ec2-role-instanceProfile"; // depends on ec2-role