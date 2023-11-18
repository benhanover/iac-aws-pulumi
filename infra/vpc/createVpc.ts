import "./vpc";
import "./subnets"; //depends on vpc
import "./internetGateway"; //depends on vpc
import "./Eip's/natEip";
import "./natGateway"; //depends on subnets, Eip's
import "./routeTables"; //depends on vpc, subnets, igw, ngw