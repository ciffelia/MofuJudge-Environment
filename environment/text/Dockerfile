FROM busybox:1.31.1

# Switch to non-root user
RUN adduser -D judge
WORKDIR /home/judge
USER judge

LABEL io.github.mofucoder.mofujudge-environment.is-mofujudge-environment="true"

LABEL io.github.mofucoder.mofujudge-environment.name="text"
LABEL io.github.mofucoder.mofujudge-environment.version="1.0.0"

LABEL io.github.mofucoder.mofujudge-environment.title="Text (cat)"
LABEL io.github.mofucoder.mofujudge-environment.description="Text (cat)"

LABEL io.github.mofucoder.mofujudge-environment.source-file="/home/judge/main.txt"
LABEL io.github.mofucoder.mofujudge-environment.compile-command="exit 0"
LABEL io.github.mofucoder.mofujudge-environment.exec-command="cat ./main.txt"
