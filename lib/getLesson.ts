import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark'
import remarkMdx from 'remark-mdx'

export interface LessonFileContentWithJSX {
    lesson_id: string
    lesson_title: string
    lesson_description: string
    contentJSX: string
}

export function getLesson(language: string, course_id: string, lesson_id: string) {

    const courseDirectory = path.join(process.cwd(), 'courses', language, course_id);

    const lessonFilesNameArray = fs.readdirSync(courseDirectory);

    const lessonFileContent = lessonFilesNameArray
    .filter(lessonFileName => lessonFileName !== "course-intro.mdx")
    .map(lessonFileName => {

        const lessonFilePath = path.join(courseDirectory, lessonFileName);

        const lessonFileContent = fs.readFileSync(lessonFilePath, 'utf8');

        const matterResult = matter(lessonFileContent);

        const processedContent = remark()
        .use(remarkMdx)
        .processSync(matterResult.content)
      
        const contentJSX = processedContent.toString();

        if (matterResult.data.lesson_id === lesson_id) {

            return {
                contentJSX,
                ...matterResult.data,
            }

        } 
    })
    .filter(object => object !== undefined)

    return lessonFileContent[0];
}