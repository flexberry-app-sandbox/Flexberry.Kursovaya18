docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursovaya18-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kursovaya18-java/app ../../..
