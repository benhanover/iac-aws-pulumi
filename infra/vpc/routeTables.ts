import { RouteTableAssociation, RouteTable, Route } from "@pulumi/aws/ec2";
import { mitigaVpc } from "./vpc";
import { privateSubnet1a, publicSubnet1a } from "./subnets";
import { igw } from "./internetGateway";
import { ngw } from "./natGateway";

/////////////////////////// internet gateway ////////////////////
const publicRouteTable = new RouteTable("public-route-table", {
    vpcId: mitigaVpc.id,
    tags: {
        Name: "mitiga-public-route-table"
    }
});


const internetRoute = new Route("internet-route", {
    routeTableId: publicRouteTable.id,
    destinationCidrBlock: "0.0.0.0/0",
    gatewayId: igw.id,
});

const publicSubnetAssociation = new RouteTableAssociation("public-subnet-association", {
    subnetId: publicSubnet1a.id,
    routeTableId: publicRouteTable.id,
});

export { publicRouteTable, internetRoute, publicSubnetAssociation };
/////////////////////////////////////////////////////////////

/////////////////////////// nat gateway ////////////////////

const privateRouteTable = new RouteTable("private-route-table", {
    vpcId: mitigaVpc.id,
    tags: {
        Name: "private-route-table"
    }
});

const natRoute = new Route("nat-route", {
    routeTableId: privateRouteTable.id,
    destinationCidrBlock: "0.0.0.0/0",
    natGatewayId: ngw.id
});

const privateSubnetAssociation = new RouteTableAssociation("private-subnet-association", {
   subnetId: privateSubnet1a.id,
   routeTableId: privateRouteTable.id,
});

export { privateRouteTable, natRoute, privateSubnetAssociation }