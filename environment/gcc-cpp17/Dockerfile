FROM gcc:9.3.0

# Switch to non-root user
RUN useradd --user-group --create-home judge
WORKDIR /home/judge
USER judge

# Build and install boost
RUN curl --silent --show-error --location --fail --remote-name https://dl.bintray.com/boostorg/release/1.72.0/source/boost_1_72_0.tar.bz2 && \
    tar --bzip2 -xf ./boost_1_72_0.tar.bz2 && \
    cd ./boost_1_72_0 && \
    ./bootstrap.sh && \
    ./b2 --without-python --threading=single --link=shared --prefix=$HOME/boost install && \
    cd .. && \
    rm -rf ./boost_1_72_0.tar.bz2 ./boost_1_72_0

LABEL io.github.mofucoder.mofujudge-environment.is-mofujudge-environment="true"

LABEL io.github.mofucoder.mofujudge-environment.name="gcc-cpp17"
LABEL io.github.mofucoder.mofujudge-environment.version="0.0.1"

LABEL io.github.mofucoder.mofujudge-environment.title="C++17 (GCC)"
LABEL io.github.mofucoder.mofujudge-environment.description="C++17 with GCC 9.3.0 and Boost 1.72"

LABEL io.github.mofucoder.mofujudge-environment.source-file="/home/judge/main.cpp"
LABEL io.github.mofucoder.mofujudge-environment.compile-command="g++ -std=c++17 -O2 -I/home/judge/boost/include -L/home/judge/boost/lib -o ./main.out ./main.cpp"
LABEL io.github.mofucoder.mofujudge-environment.exec-command="./main.out"
