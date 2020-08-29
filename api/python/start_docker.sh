#!/bin/bash
docker build -t "python_test" -f ./Dockerfile --build-arg="PG_DSN:postgres://localhost" . \
&& docker run --rm -it -p 5000:5000 --name python_test python_test

