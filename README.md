# Multi-Container Application

Overcomplicated version of a Fibonacci calculator that returns value for a given index. The purpose of this application is to showcase multi-container deployment with Docker and AWS.

![1688564500714](image/README/1688564500714.png)

![1688648116385](image/README/1688648116385.png)
## Routing

Nginx routes traffic to correct server based on the incoming request. Configuration can be found in `default.conf`

![1688564708517](image/README/1688564708517.png)

![1688564728226](image/README/1688564728226.png)
## Deployment to Elastic Beanstalk

This project uses github actions to deploy to AWS EB. Configuration can be found in `.github/workflows/deploy.yaml`. Configuration has been based on [beanstalk-deploy](https://github.com/einaregilsson/beanstalk-deploy). Deployment is triggered by a code merge to `main` branch.

## Prerequisite

In order for the pipeline to be functional you need to set up an EB application in AWS. You can find instructions on how to sign up here [AWS free tier](https://aws.amazon.com/free/?trk=bd20e73c-a932-469f-b6cf-0872a618ab7c&sc_channel=ps&ef_id=EAIaIQobChMIoKmSrZDj_wIV0OrtCh3y_wgQEAAYASAAEgKx1vD_BwE:G:s&s_kwcid=AL!4422!3!661270826084!e!!g!!aws%20free%20tier!20187389987!149698005739&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all). To create a EB application, follow the steps below:

**Create EC2 IAM Role**

1. Go to AWS Management Console
2. Search for **IAM** and click the IAM Service.
3. Click **Roles** under **Access Management **in the left sidebar.
4. Click the **Create role** button.
5. Select **AWS Service** under **Trusted entity type** . Then select **EC2** under **common use cases** .
6. Search for **AWSElasticBeanstalk** and select both the **AWSElasticBeanstalkWorkerTier** and **AWSElasticBeanstalkMulticontainerDocker** policies. Click the **Next** button.
7. Give the role the name of **aws-elasticbeanstalk-ec2-role**
8. Click the **Create role** button.
   
**Create Elastic Beanstalk Environment (new application)**

1. Go to AWS Management Console
2. Search for **Elastic Beanstalk** and click the Elastic Beanstalk service.
3. Follow steps below

![1](https://github.com/Cantem/multi-docker/assets/36113728/ac6ca9eb-451d-47c5-948c-16b2b82d3744)

![3](https://github.com/Cantem/multi-docker/assets/36113728/42dc94ad-3fdc-4782-8b4f-0de8a36dfbd3)

![2](https://github.com/Cantem/multi-docker/assets/36113728/b921beec-f62e-4330-9c34-c9c522e4785d)

**You may now click the Skip to Review button as Steps 3-6 are not applicable.**
