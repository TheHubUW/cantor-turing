#!/bin/bash
aws s3 sync build s3://aws-website-thehub-boado
# cd into backend dir
cd backend
shep deploy --env production
cd ../
