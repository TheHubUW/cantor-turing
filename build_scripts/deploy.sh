#!/bin/bash
aws s3 sync build s3://thehubuw.org
# cd into backend dir
cd backend
shep deploy --env production
cd ../
