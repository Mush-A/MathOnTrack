import Head from "next/head";
import { GetStaticProps } from 'next'

import Grid from "@mui/material/Grid";

import GeneralContainer from "../../../../components/ui/generalContainer/generalContainer";
import PageIntro from "../../../../components/ui/pageIntro/pageIntro";
import CourseCard from "../../../../components/ui/courseCard/courseCard";

import { getCourses } from "../../../../lib/getCourses";
import { getLessons, LessonFileContent } from "../../../../lib/getLessons";

import NextBreadcrumbs from '../../../../components/ui/nextBreadcrumbs/nextBreadcrumbs';

interface Lessons {
    course_id: string
    lessonFileContents: LessonFileContent[]
}

export default function Lessons(props: Lessons) {

    return <>
        <Head>
            <title>{props?.course_id} - Lessons</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <GeneralContainer>
            <NextBreadcrumbs mapTo={{ from: '[course]', to: '[course]/lessons' }} />
        </GeneralContainer>
        <GeneralContainer>
            <PageIntro title={"Lessons from " + props.course_id} image='/assets/mandelbrot.png'>
                <p>View lessons from {props.course_id}</p>
            </PageIntro>
        </GeneralContainer>
        <GeneralContainer>
            <Grid container spacing={4} columns={{ xs: 4, md: 12 }}>
                {
                    props.lessonFileContents.map(lessonFileContent => {
                        return (
                            <Grid item key={lessonFileContent.lesson_id} xs={4} md={4}>
                                <CourseCard
                                    title={lessonFileContent.lesson_title} 
                                    description={lessonFileContent.lesson_description} 
                                    link={`/learn/${props.course_id}/lessons/${lessonFileContent.lesson_id}`} 
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </GeneralContainer>
    </>

}

export const getStaticProps: GetStaticProps = async (context) => {

    const course_id = context.params?.course as string;

    const lessonFileContents = getLessons('en', course_id);

    return {
        props: {
            course_id,
            lessonFileContents
        },
    };
}

export const getStaticPaths = async () => {

    const courses = getCourses('en');
  
    const paths = courses.map((course) => ({
      params: { course: course.course_id },
    }))
  
    return { paths, fallback: false }
}