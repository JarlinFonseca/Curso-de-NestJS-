import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";

export const CORS : CorsOptions = { 
    origin: true,
    methods: 'GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS',
    credentials: true
}