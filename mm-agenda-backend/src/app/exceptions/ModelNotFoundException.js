function ModelNotFoundException(message = 'O recurso solicitado não existe') {
  this.message = message;
  this.name = 'ModelNotFoundException';
}

export default ModelNotFoundException;
