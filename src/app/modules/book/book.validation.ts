import { z } from "zod";

const createBookValidation = z.object({
    body:z.object({
        title:z.string({required_error:"Title is required"}),
        thumbnail:z.string({required_error:"Thumbnail is required"}),
        author:z.string({required_error:"Author is Required"}),
        genre:z.string({required_error:'Genre is reequired'}),
        description:z.string({required_error:'description is reequired'}),
        publicationDate:z.string({required_error:'publicationDate is reequired'}),
        addedBy:z.string({required_error:'addedBy is reequired'}),
    })
})


export const BookValidation = {
    createBookValidation
}