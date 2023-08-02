# Install Nginx on the AWS instance to serve the project
sudo yum install nginx -y
# Start the Nginx server
sudo service nginx start
# Copy the project files to the Nginx server
sudo cp -r RockPaperScissors/* /var/www/html/
# Ensure the Nginx server has the correct permissions to serve the project
sudo chown -R www-data:www-data /var/www/html/
# Restart the Nginx server to apply the changes
sudo service nginx restart