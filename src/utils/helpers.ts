export const formatResponse = (statusCode: number, data: any, message: string) => {

    return {
        'status': statusCode,
        'data': data,
        'message': message
    }
}