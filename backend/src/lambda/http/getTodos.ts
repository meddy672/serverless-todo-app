import 'source-map-support/register'
import { getUserId } from '../utils'
import { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler } from 'aws-lambda'
import { getTodos } from '../../businessLogic/todo'
import { createLogger } from '../../utils/logger'
import { TodoItem } from '../../interface/TodoItem'


const logger = createLogger('Get Todos')

/**
 * get all users todos
 */
export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  logger.info(event)
  const userId: string = getUserId(event)
  if (!userId) {
    return {
      statusCode: 401,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        error: 'User is not authorized'
      })
    }
  }
  logger.info('Getting todos', { event, userId })
  try {
    const todos: TodoItem[] = await getTodos(userId)
    return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin':'*'  
        },
        body: JSON.stringify({
            todos
        })
    }
  } catch (error) {
    logger.warn('failure', { error: error.message})
  }

}
