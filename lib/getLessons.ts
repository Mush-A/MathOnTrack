import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface LessonFileContent {
    lesson_id: string
    lesson_title: string
    lesson_description: string
}

export function getLessons(language: string, course_id: string) {

    const courseDirectory = path.join(process.cwd(), 'courses', language, course_id);

    const lessonFilesNameArray = fs.readdirSync(courseDirectory);

    const lessonFileContents = lessonFilesNameArray.map(lessonFileName => {

        if (lessonFileName === "course-intro.mdx") {
            return;
        }

        const lessonFilePath = path.join(courseDirectory, lessonFileName);

        const lessonFileContent = fs.readFileSync(lessonFilePath, 'utf8');

        const matterResult = matter(lessonFileContent);

        return {
            ...matterResult.data,
        }
    })

    return lessonFileContents;
}