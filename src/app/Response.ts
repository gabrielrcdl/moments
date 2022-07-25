export interface Response<T>{// generic poder ser qualquer coisa, um dado, comentario...
    message?: string,
    data: T
}