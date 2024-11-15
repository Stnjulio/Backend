// src/services/cls.ts
import { createNamespace } from 'cls-hooked'

const namespace = createNamespace('tasks')

const getNamespace = () => namespace

const setValue = (key: string, value: unknown) => {
  namespace.set(key, value)
}

const getValue = (key: string) => {
  return namespace.get(key)
}

const clsService = {
  getNamespace,
  setValue,
  getValue,
}

export default clsService