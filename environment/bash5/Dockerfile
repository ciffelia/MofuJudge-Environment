FROM bash:5.0.16

# Switch to non-root user
RUN adduser -D judge
WORKDIR /home/judge
USER judge

LABEL io.github.mofucoder.mofujudge-environment.is-mofujudge-environment="true"

LABEL io.github.mofucoder.mofujudge-environment.name="bash5"
LABEL io.github.mofucoder.mofujudge-environment.version="1.0.0"

LABEL io.github.mofucoder.mofujudge-environment.title="Bash 5"
LABEL io.github.mofucoder.mofujudge-environment.description="Bash 5.0.16"

LABEL io.github.mofucoder.mofujudge-environment.source-file="/home/judge/main.sh"
LABEL io.github.mofucoder.mofujudge-environment.compile-command="bash -n ./main.sh"
LABEL io.github.mofucoder.mofujudge-environment.exec-command="bash ./main.sh"
