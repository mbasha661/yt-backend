FROM node

WORKDIR /app/backend

COPY . /app/backend/

RUN npm install

ENV DB_user=rmahaboob48
ENV DB_password=72LukKfV0rIecFaS
ENV DB_name=bashaytc
ENV SECRET_KEY=value
ENV EMAIL=rmahaboob48@gmail.com
ENV PASSWORD=Maha@0204

CMD ["node", "server.js"]
