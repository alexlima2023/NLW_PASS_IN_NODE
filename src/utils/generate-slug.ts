export function generateSlug(text: string): string {
    return text
        .normalize("NFD") // Normaliza para separar caracteres com acentos
        .replace(/[\u0300-\u036f]/g, "") // Remove os caracteres acentuados
        .toLowerCase() // Converte para minúsculas
        .trim() // Remove espaços no início e no fim
        .replace(/[^\w\s-]/g, "") // Remove caracteres que não são alfanuméricos, espaços ou hífens
        .replace(/\s+/g, "-"); // Substitui espaços por hífens
}