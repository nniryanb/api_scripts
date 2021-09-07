# api_scripts
API Load Simulation Scripts 200s 401s 403s 404s 500s and more 

install k6 from k6.io on the test container or vm to initiate the requests from
edit the variables in each js script file and the http get or post url as needed before running with k6 
use the -v param for verbose output
use the -a param to specify the port number of the k6 process to run, default is 6565
uncomment the 2nd to last line to output the response message to the console 
add a & to the end of the command to run the process in the background 

example 

k6 run -v -a localhost:6501 scriptname.js & 


