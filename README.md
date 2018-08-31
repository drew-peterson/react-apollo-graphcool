# AWS CONFIG

- multi-docker setup
- services > vpc > security groups
  - create new security group
  - edit secuirty group
    - inbound rules > source > select our security group > save
  - update secuirty group for elastic beanstalk
    - configration > instances > ec2 security groups > select our security group
- set enviornment for aws vars > EC2 > software
- set env var for travis
  - AWS - IAM > Users > create user
  - user name , programmtic access
  - attach exsiting
    - search beanstalk > select all > create user
- add key and scret to aws for travis deployment
