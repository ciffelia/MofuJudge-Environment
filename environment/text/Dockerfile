FROM busybox:1.31.1

# Switch to non-root user
RUN adduser -D judge
WORKDIR /home/judge
USER judge

LABEL io.github.mofucoder.mofujudge.source-file = "/home/judge/main.txt"
LABEL io.github.mofucoder.mofujudge.compile-command = "exit 0"
LABEL io.github.mofucoder.mofujudge.exec-command = "cat ./main.txt"
