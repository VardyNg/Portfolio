terraform {
 required_providers {
   aws = {
     source = "hashicorp/aws"
   }
 }
}
    
# Configure the AWS Provider
provider "aws" {
  region  = "${var.region}"
  shared_credentials_files = ["$HOME/.aws/credentials"]
  profile ="${var.profile}"
}

