NAME=e-commerce
VERSION=latest
IMAGE_NAME=ui/${NAME}:${VERSION}

build: install_deps vite_build image_build

install_deps:
	@npm install

vite_build:
	@npm run build

image_build: 
	@docker build --platform linux/amd64  --no-cache -f Dockerfile -t ${IMAGE_NAME} .

image_zip:
	@docker save ui/${NAME}:${VERSION} | gzip > ${NAME}.tar.gz

image_push:
	scp -i interns-web.pem ${NAME}.tar.gz ubuntu@ec2-3-7-50-225.ap-south-1.compute.amazonaws.com:~/docker-images/

connect: 
	ssh -i "interns-web.pem" ubuntu@ec2-3-7-50-225.ap-south-1.compute.amazonaws.com

tag:
	@docker tag ui/e-commerce:latest sumannunia/e-commerce:latest

push:
	@docker push sumannunia/e-commerce:latest


# ensure the docker is running in the desktop

# sudo docker ps

#sudo docker images


#sudo docker run -d -p 4000:80 ui/video-project-ui:latest

#sudo docker load -i video-project-ui.tar.gz

# sudo docker stop  // to stop container

# sudo docker system prune -a // to remove the images

# sudo docker ps -a

#docker rm ID_or_Name ID_or_Name


# sudo systemctl start nginx 
# sudo systemctl stop nginx 
# sudo systemctl restart nginx

# sudo systemctl stop apache2


# sudo nginx -t

# df -h for space

# sudo ss -ltn , sudo ss -ltnp  https://linuxconfig.org/how-to-check-for-open-ports-on-ubuntu-linux

# sudo netstat -ntpl

# java -jar InternsApp-v1.01.jar

# rm -r node_modules/


# nvm use 18.1.0 for node

