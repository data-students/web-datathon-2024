# build with image of alpine containing bun
FROM oven/bun:alpine

WORKDIR /frontend

# install dependencies with bun
COPY package.json bun.lockb .
RUN bun install --frozen-lockfile

# COPY the rest of the filed
COPY . .

RUN bun run build

# Expose the port that sveltekit uses
EXPOSE 5173

CMD ["bun", "--bun", "run", "dev", "--host", "0.0.0.0"]