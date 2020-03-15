FROM node:12.16.1

# Switch to non-root user
RUN useradd --user-group --create-home judge
WORKDIR /home/judge
USER judge

LABEL io.github.mofucoder.mofujudge-environment.is-mofujudge-environment="true"

LABEL io.github.mofucoder.mofujudge-environment.name="javascript-node12"
LABEL io.github.mofucoder.mofujudge-environment.version="1.0.0"

LABEL io.github.mofucoder.mofujudge-environment.title="JavaScript (Node.js 12)"
LABEL io.github.mofucoder.mofujudge-environment.description="JavaScript with Node.js 12.16.1"

LABEL io.github.mofucoder.mofujudge-environment.source-file="/home/judge/main.js"
LABEL io.github.mofucoder.mofujudge-environment.compile-command="node --check ./main.js"
LABEL io.github.mofucoder.mofujudge-environment.exec-command="node ./main.js"
