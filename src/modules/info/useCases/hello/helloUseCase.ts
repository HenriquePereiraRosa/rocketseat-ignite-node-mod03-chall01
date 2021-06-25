import { injectable } from "tsyringe";

@injectable()
export class HelloUseCase {
  execute(): string {    
      
    const msg = 'Hello World';
    return msg;
  }
}